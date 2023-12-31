import calculateProbabilityForInterval from "./probabilityForInterval";

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
        intervalEnd = intervalStart + deltaValue - 0.01;

        if (i === intervalCount - 1) {
            intervalEnd = maxValue;
        }

        const start = intervalStart;
        const end = intervalEnd;

        countInInterval = inputs.filter((value) => value >= start && value <= end).length;
        percentInInterval = (countInInterval / inputs.length);

        if (percentInInterval > 0) {
            const probability = calculateProbabilityForInterval(start, end, inputs);

            intervals.push({
                start: start.toFixed(2),
                end: end.toFixed(2),
                count: countInInterval,
                percent: percentInInterval.toFixed(2),
                probability: probability.toFixed(2),
            });
        }

        intervalStart = intervalEnd + 0.01;
    }
    return intervals;
}

export default distributionIntervals