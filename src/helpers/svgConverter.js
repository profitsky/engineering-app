export default function svgConverter(svgFile) {
  const obj = [];

  const splitedData = svgFile.split('>');
  const ar = splitedData
    .filter((element, index) => index > 1)
    .map((element) =>
      element
        .split(' ')
        .filter((element, index) => index > 1)
        .join()
        .replace('fill', '')
        .replace('stroke', '')
        .replace('d', '')
        .replace(/\/$/g, '')
        .replace(/,/g, ' ')
        .split('="')
        .filter((element, index) => index > 0)
        .map((element) => element.replace('"', ''))
        .map((element) => element.trim())
    );

  ar.filter((element, index) => index < ar.length - 1).map((element, index) =>
    obj.push({
      id: index,
      d: element[0],
      fill: element[1],
      stroke: element[2],
    })
  );

  return obj;
}
