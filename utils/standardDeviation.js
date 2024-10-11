async function standardDeviation(values) {
    const n = values.length;
    
    // Calculate the mean (average)
    const mean = values.reduce((a, b) => a + b) / n;
    
    // Calculate the square of the differences between each value and the mean
    const squareDiffs = values.map(value => {
        const diff = value - mean;
        return diff * diff;
    });
    
    // Calculate the variance
    const variance = squareDiffs.reduce((a, b) => a + b) / (n - 1); // For sample std dev, use n-1
    
    // Return the square root of the variance (standard deviation)
    return Math.sqrt(variance);
}

module.exports = standardDeviation;