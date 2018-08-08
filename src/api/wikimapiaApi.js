const Cache = new Map();

export function getInfo(id, signal) {
  if (Cache.has(id)) {
    return Cache.get(id);
  }
  const params = {
    // key: '1E9C412A-EF7660ED-FC0BF0C2-ED5C6B90-04B71940-FC4F9ABE-A2E2F708-F87E3549',
    key: 'example',
    function: 'place.getbyid',
    id: id,
    format: 'json',
    language: 'en',
    data_blocks: 'main,photos'
  };
  const url = new URL("http://api.wikimapia.org/");
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  return fetch(url.toString(), {signal}).then(res => {
    const locationInfo = res.json();
    Cache.set(id, locationInfo);
    return locationInfo;
  });
}