export 	const holidays = [
    {
        serial: '01',
        name: 'New Year',
        date: 'Jan 01, 2026',
        style: "bg-sky-100 text-sky-800 ring-sky-500  rounded col-span-4 md:col-span-2"
    },
    {
        serial: '02',
        name: 'Makar Sankranti',
        date: 'Jan 14, 2026',
        style: "bg-amber-100 text-amber-800 ring-amber-500 rounded col-span-4 md:col-span-1"
    },
    {
        serial: '03',
        name: 'Republic Day',
        date: 'Jan 26, 2026',
        style: "bg-orange-100 text-orange-800 ring-orange-500 rounded col-span-4 md:col-span-1"
    },
    {
        serial: '04',
        name: 'Holi',
        date: 'Mar 04, 2026',
        style: "bg-violet-100 text-violet-800 ring-violet-500 rounded col-span-4 md:col-span-1"
    },
    {
        serial: '05',
        name: 'Ramadan',
        date: 'Mar 20, 2026',
        style: "bg-pink-100 text-pink-800 ring-pink-500 rounded col-span-4 md:col-span-1"
    },
    {
        serial: '06',
        name: 'Bengali New Year',
        date: 'Apr 15, 2026',
        style: "bg-green-100 text-green-800 ring-green-500 rounded col-span-4 md:col-span-2"
    },
    {
        serial: '07',
        name: 'Gandhi Jayanti',
        date: 'Oct 02, 2026',
        style: "bg-gray-100 text-gray-800 ring-gray-500 rounded col-span-4 md:col-span-1"
    },
    {
        serial: '08',
        name: 'Maha Astami',
        date: 'Oct 19, 2026',
        style: "bg-indigo-100 text-indigo-800 ring-indigo-500 rounded col-span-4 md:col-span-1"
    },
    {
        serial: '09',
        name: 'Maha Navami',
        date: 'Oct 20, 2026',
        style: "bg-purple-100 text-purple-800 ring-purple-500 rounded col-span-4 md:col-span-2 md:row-span-2"
    },
    {
        serial: '10',
        name: 'Vijaya Dashami',
        date: 'Oct 21, 2026',
        style: "bg-teal-100 text-teal-800 ring-teal-500 rounded col-span-4 md:col-span-1"
    },
    {
        serial: '11',
        name: 'Diwali',
        date: 'Nov 11, 2026',
        style: "bg-red-100 text-red-800 ring-red-500 rounded col-span-4 md:col-span-1"
    },
    {
        serial: '12',
        name: 'Christmas',
        date: 'Dec 25, 2026',
        style: "bg-sky-100 text-sky-800 ring-sky-500  rounded col-span-4"
    }
];

export function getNearestHoliday(holidays) {
    const now = new Date();

    let nearest = null;
    let minTime = Infinity;

    for (const holiday of holidays) {
        const timeToHoliday = new Date(holiday.date) - now;
        if (timeToHoliday > 0 && timeToHoliday < minTime) {
            minTime = timeToHoliday;
            nearest = holiday;
        }
    }
    return nearest;
}

export function getCountdownToDate(targetDate) {
    const now = new Date();
    const target = new Date(targetDate);

    const difference = target - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const hours = Math.floor((difference / 1000 / 60 / 60) % 24);
    const days = Math.floor((difference / 1000 / 60 / 60 ) / 24);

    return {days, hours, minutes, seconds};
}
