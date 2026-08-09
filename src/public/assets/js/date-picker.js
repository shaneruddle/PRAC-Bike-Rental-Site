document.addEventListener('DOMContentLoaded', () => {
    // Booking Form Logic + Date Range Picker
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        const DOW = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        const today = new Date(); today.setHours(0,0,0,0);
        const MIN_DAYS = 1; // minimum rental period (days) — bikes have no minimum beyond a single day

        const elPickupInput = document.getElementById('dp-input-pickup');
        const elReturnInput = document.getElementById('dp-input-return');
        const elPickupTimeInput = document.getElementById('dp-input-pickup-time');
        const elReturnTimeInput = document.getElementById('dp-input-return-time');
        const elTimePickup = document.getElementById('dp-time-pickup');
        const elTimeReturn = document.getElementById('dp-time-return');
        const elSumPickup = document.getElementById('dp-sum-pickup');
        const elSumReturn = document.getElementById('dp-sum-return');
        const elPickupVal = document.getElementById('dp-val-pickup');
        const elReturnVal = document.getElementById('dp-val-return');
        const elTriggerPickup = document.getElementById('dp-trigger-pickup');
        const elTriggerReturn = document.getElementById('dp-trigger-return');
        const overlay = document.getElementById('dp-overlay');

        let viewMonth = today.getMonth(), viewYear = today.getFullYear();
        let startDate = null, endDate = null;
        let committed = { start: null, end: null, pickupTime: '09:30', dropoffTime: '09:30' };

        const sameDay = (a,b) => a && b && a.getTime() === b.getTime();
        const iso = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
        const fmt = d => `${DOW[d.getDay()]} ${d.getDate()} ${MONTHS[d.getMonth()].slice(0,3)}`;

        function buildGrid(el, year, month) {
            el.innerHTML = '';
            const first = new Date(year, month, 1).getDay();
            const days = new Date(year, month+1, 0).getDate();
            for (let i=0;i<first;i++){ const e=document.createElement('div'); e.className='dp-day is-empty'; el.appendChild(e); }
            for (let d=1; d<=days; d++) {
                const date = new Date(year, month, d); date.setHours(0,0,0,0);
                const b = document.createElement('button');
                b.type='button'; b.className='dp-day'; b.textContent=d;
                if (date < today) b.classList.add('is-disabled');
                if (startDate && !endDate && date > startDate && Math.round((date - startDate)/86400000) < MIN_DAYS) {
                    b.classList.add('is-min-block');
                    b.dataset.tip = MIN_DAYS + ' day minimum';
                }
                if (sameDay(date, today)) b.classList.add('is-today');
                if (startDate && endDate) {
                    if (sameDay(date,startDate)) b.classList.add('range-start');
                    else if (sameDay(date,endDate)) b.classList.add('range-end');
                    else if (date>startDate && date<endDate) b.classList.add('in-range');
                } else if (startDate && sameDay(date,startDate)) {
                    b.classList.add('is-single');
                }
                if (!b.classList.contains('is-disabled') && !b.classList.contains('is-min-block')) b.addEventListener('click', () => pick(date));
                el.appendChild(b);
            }
        }

        function pick(date) {
            if (!startDate || (startDate && endDate)) { startDate = date; endDate = null; }
            else if (date < startDate) {
                // Reversed selection: only form the range if it meets the minimum, else restart from the new date
                if (Math.round((startDate - date)/86400000) >= MIN_DAYS) { endDate = startDate; startDate = date; }
                else { startDate = date; endDate = null; }
            }
            else if (sameDay(date, startDate)) { /* ignore same-day */ }
            else if (Math.round((date - startDate)/86400000) < MIN_DAYS) { /* below minimum rental — ignore */ }
            else { endDate = date; }
            render();
        }

        function render() {
            const n = viewMonth===11?0:viewMonth+1, ny = viewMonth===11?viewYear+1:viewYear;
            document.getElementById('dp-m1-label').textContent = `${MONTHS[viewMonth]} ${viewYear}`;
            document.getElementById('dp-m2-label').textContent = `${MONTHS[n]} ${ny}`;
            buildGrid(document.getElementById('dp-m1-grid'), viewYear, viewMonth);
            buildGrid(document.getElementById('dp-m2-grid'), ny, n);
            document.getElementById('dp-prev').disabled =
                (viewYear < today.getFullYear()) || (viewYear===today.getFullYear() && viewMonth<=today.getMonth());
            const dur = document.getElementById('dp-duration');
            const apply = document.getElementById('dp-apply');
            const hint = document.getElementById('dp-hint');
            if (elSumPickup) elSumPickup.textContent = startDate ? fmt(startDate) : '—';
            if (elSumReturn) elSumReturn.textContent = endDate ? fmt(endDate) : '—';
            if (startDate && endDate) {
                const days = Math.round((endDate-startDate)/86400000);
                document.getElementById('dp-duration-pill').textContent = days + (days===1?' day':' days');
                dur.style.visibility='visible'; apply.disabled=false;
                hint.textContent = `Pickup ${fmt(startDate)} → Return ${fmt(endDate)}`;
            } else if (startDate) {
                dur.style.visibility='hidden'; apply.disabled=true;
                hint.textContent = 'Now select your return date';
            } else {
                dur.style.visibility='hidden'; apply.disabled=true;
                hint.textContent = 'Select your pickup date';
            }
        }

        function openCal() {
            if (committed.start) { viewMonth = committed.start.getMonth(); viewYear = committed.start.getFullYear(); }
            startDate = committed.start; endDate = committed.end;
            if (elTimePickup) elTimePickup.value = committed.pickupTime;
            if (elTimeReturn) elTimeReturn.value = committed.dropoffTime;
            render(); overlay.classList.add('is-open');
        }
        function closeCal(){ overlay.classList.remove('is-open'); }

        elTriggerPickup.addEventListener('click', openCal);
        elTriggerReturn.addEventListener('click', openCal);
        document.getElementById('dp-open')?.addEventListener('click', openCal);
        document.getElementById('dp-cancel').addEventListener('click', closeCal);
        overlay.addEventListener('click', e => { if (e.target === overlay) closeCal(); });
        document.getElementById('dp-prev').addEventListener('click', () => { if(viewMonth===0){viewMonth=11;viewYear--;}else viewMonth--; render(); });
        document.getElementById('dp-next').addEventListener('click', () => { if(viewMonth===11){viewMonth=0;viewYear++;}else viewMonth++; render(); });

        function commitSelection() {
            elPickupInput.value = iso(committed.start); elReturnInput.value = iso(committed.end);
            if (elPickupTimeInput) elPickupTimeInput.value = committed.pickupTime;
            if (elReturnTimeInput) elReturnTimeInput.value = committed.dropoffTime;
            elPickupVal.textContent = fmt(committed.start) + ' · ' + committed.pickupTime;
            elReturnVal.textContent = fmt(committed.end) + ' · ' + committed.dropoffTime;
            elTriggerPickup.classList.remove('is-placeholder');
            elTriggerReturn.classList.remove('is-placeholder');
        }

        function goToResults() {
            const from = elPickupInput.value;
            const to = elReturnInput.value;
            const pickupTime = (elPickupTimeInput && elPickupTimeInput.value) || "09:30";
            const dropoffTime = (elReturnTimeInput && elReturnTimeInput.value) || "09:30";
            // GA4: count the handoff to the booking engine as the site's primary lead event
            if (typeof gtag === 'function') {
                gtag('event', 'search_bikes', { from: from, to: to });
            }
            // Redirect to the booking engine in bike mode: from/to dates + times (no location at
            // this stage). UTM-tagged so enquiries/bookings are attributed to the bike site in the
            // CRM (the engine stores utm_source on every enquiry) and in GA4.
            window.location.href = `https://app.pattayarentacar.com/rent-a-bike?from=${from}&to=${to}&pickupTime=${pickupTime}&dropoffTime=${dropoffTime}&utm_source=pattayarentabike&utm_medium=site_handoff`;
        }

        document.getElementById('dp-apply').addEventListener('click', () => {
            committed.start = startDate; committed.end = endDate;
            committed.pickupTime = elTimePickup ? elTimePickup.value : committed.pickupTime;
            committed.dropoffTime = elTimeReturn ? elTimeReturn.value : committed.dropoffTime;
            commitSelection();
            closeCal();
            goToResults();
        });

        document.getElementById('dp-reset')?.addEventListener('click', () => {
            startDate = null; endDate = null;
            if (elTimePickup) elTimePickup.value = '09:30';
            if (elTimeReturn) elTimeReturn.value = '09:30';
            render();
        });

        // Default selection: tomorrow → +3 days
        const tomorrow = new Date(today); tomorrow.setDate(tomorrow.getDate()+1);
        const plusThree = new Date(today); plusThree.setDate(plusThree.getDate()+4);
        committed.start = tomorrow; committed.end = plusThree;
        commitSelection();

        // Form has no submit button anymore (the picker's Search triggers results), kept as a safety net
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            goToResults();
        });
    }
});
