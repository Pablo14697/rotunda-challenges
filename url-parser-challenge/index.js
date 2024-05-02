function parseURL(url) {
  const regex = /\/(\d+)\/api\/(\w+)\/(\d+)\?(.*)/;

  const matches = url.match(regex);

  const [, version, collection, id] = matches;

  const queryParams = new URLSearchParams(matches[4]);
  const { sort, limit } = Object.fromEntries(queryParams.entries());

  const result = {
    version,
    collection,
    id: Number(id),
    sort,
    limit: Number(limit),
  };

  return result;
}

const input = "/6/api/listings/3?sort=desc&limit=10";

console.log(parseURL(input));
