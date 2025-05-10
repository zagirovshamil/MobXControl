export const PluralText: React.FC<{ count: number; baseWord: string }> = ({
  count,
  baseWord,
}) => {
  const wordVariants: [string, string, string] = [
    `${baseWord}ка`,
    `${baseWord}ки`,
    `${baseWord}ок`,
  ];

  const pluralize = (number: number, words: [string, string, string]) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return words[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[Math.min(number % 10, 5)]
    ];
  };

  const correctWord = pluralize(count, wordVariants);

  return (
    <span>
      {count} {correctWord}
    </span>
  );
};
