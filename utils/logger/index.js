const info = (message) => {
    if (process.env.NODE_ENV === 'local') {
        console.log(message);
    } else {
        // use logger like logstash, etc
    }
};

const error = (message) => {
    if (process.env.NODE_ENV === 'local') {
        console.log(message);
    } else {
        // use logger like logstash, etc
    }
};

module.exports = {
    info,
    error,
};
