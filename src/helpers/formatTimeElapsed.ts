export const formatTimeElapsed = (seconds: number) => {
    let minutes = Math.floor(seconds / 60);
    seconds -= (minutes * 60);

    let secString = `${seconds < 10 ? '0'+seconds : seconds}`;
    let minString = `${minutes < 10 ? '0'+minutes : seconds}`;

    return `${minString}:${secString}`;
}