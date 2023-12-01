function DataToJson(data) {
  return { data: [{ score: data }] };
}

function ScoreParser(data) {
  return data * 100;
}

export { ScoreParser, DataToJson };
