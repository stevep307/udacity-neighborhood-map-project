import bridges from '../data/bridges';

export function getBridges() {
  return Promise.resolve(bridges);
}

export function searchBridges(searchString) {
  return Promise.resolve(bridges.filter(
    ({title}) => title.toLowerCase().includes(searchString.toLowerCase())
  ));
}

export function getInfoById(id) {
  return Promise.resolve(bridges.find(
    (bridge) => bridge.id === parseInt(id, 10)
  ));
}
