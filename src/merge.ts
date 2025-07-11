export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  // Reverse collection_3 (descending -> ascending)
  const reversed3 = [];
  for (let i = collection_3.length - 1; i >= 0; i--) {
    reversed3.push(collection_3[i]);
  }

  // Merge collection_1 and collection_2
  const merged12 = mergeTwoSorted(collection_1, collection_2);

  // Merge with reversed3
  return mergeTwoSorted(merged12, reversed3);
}

function mergeTwoSorted(a: number[], b: number[]): number[] {
  const result: number[] = [];
  let i = 0,
    j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      result.push(a[i++]);
    } else {
      result.push(b[j++]);
    }
  }

  while (i < a.length) result.push(a[i++]);
  while (j < b.length) result.push(b[j++]);

  return result;
}
