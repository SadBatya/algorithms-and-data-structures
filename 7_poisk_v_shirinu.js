const graph = {};

graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

function breadThSeSearch(graph, start, end) {
  let queque = [];
  queque.push(start);
  while (queque.length > 0) {
    const current = queque.shift();
    if (!graph[current]) {
      graph[current] = [];
    }
    if (graph[current].includes(end)) {
      return true;
    } else {
      queque = [...queque, ...graph[current]];
    }
  }
}

console.log(breadThSeSearch(graph, 'a', 'g'));
