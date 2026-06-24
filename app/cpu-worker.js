const end = Date.now() + 30000; // 30 segundos de CPU a 100%
while (Date.now() < end) {
    Math.random() * Math.random();
}
