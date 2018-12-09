export default function getVisiblePots(pots, from, size, isAscending) {
  const sortedPots = pots.sort(getSortFn(isAscending));
  return size ? sortedPots.slice(from, size) : [...sortedPots];
}

function getSortFn(sortAscending) {
  return (a, b) => {
    if (a.potAmount > b.potAmount) {
      return sortAscending ? 1 : -1;
    }
    if (b.potAmount > a.potAmount) {
      return sortAscending ? -1 : 1
    }
    return 0;
  }
}