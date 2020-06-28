const getDp = function(x, y) {
    let m = x.length;
    let n = y.length;
    let dp = [];
    for (let i = 0; i <= m; i++) {
        dp[i] = [0];
    }
    for (let j = 1; j <= n; j++) {
        dp[0][j] = 0;
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (x[i - 1] === y[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                if (dp[i - 1][j] > dp[i][j - 1]) {
                    dp[i][j] = dp[i - 1][j];
                } else {
                    dp[i][j] = dp[i][j - 1];
                }
            }
        }
    }
    return dp
}

const getLcs = function(dp, x, y, i, j) {
    if (i === 0 || j === 0) {
        return ''
    }
    if (x[i - 1] === y[j - 1]) {
        return getLcs(dp, x, y, i - 1, j - 1) + x[i - 1]
    } else {
        if (dp[i - 1][j] > dp[i][j - 1]) {
            return getLcs(dp, x, y, i - 1, j)
        } else {
            return getLcs(dp, x, y, i, j - 1)
        }
    }
}

const lcs = function(x, y) {
    let dp = getDp(x, y);
    return getLcs(dp, x, y, x.length, y.length);
}

module.exports = lcs

