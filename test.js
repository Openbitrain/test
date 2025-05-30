function extractTimeAndNumber(str) {
    // Regular expression to match the number and the time unit
    const match = str.match(/(\d+)\s+(minute|hour|day)s?/);

    if (match) {
        return {
            time: match[2],  // Extract time unit (minute, hour, or day)
            number: parseInt(match[1], 10) // Extract the number and convert it to an integer
        };
    }

    return null;  // If no match found, return null
}
const timeStrings = [
    "12 minutes ago",
    "1 minutes ago",
    "9 hour ago",
    "20 hours ago",
    "1 day ago"
];

timeStrings.forEach(str => {
    console.log(extractTimeAndNumber(str));
});