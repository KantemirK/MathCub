function distributionIntervals(inputs) {
    const maxValue = Math.max(...inputs);
    const minValue = Math.min(...inputs);
    const intervalCount = Math.ceil(1 + 3.22 * Math.log(inputs.length));
    const deltaValue = (maxValue - minValue) / intervalCount;

    const intervals = [];
    let intervalStart = minValue;
    let intervalEnd;
    let countInInterval;
    let percentInInterval;

    for (let i = 0; i < intervalCount; i++) {
        intervalEnd = intervalStart + deltaValue;

        if (i === intervalCount - 1) {
            intervalEnd = maxValue;
        }

        countInInterval = inputs.filter((value) => value >= intervalStart && value <= intervalEnd).length;
        percentInInterval = (countInInterval / inputs.length);

        if (percentInInterval > 0) {
            intervals.push({
                start: intervalStart.toFixed(2),
                end: intervalEnd.toFixed(2),
                count: countInInterval,
                percent: percentInInterval.toFixed(2),
            });
        }

        intervalStart = intervalEnd;
    }
    return intervals
}
export default distributionIntervals