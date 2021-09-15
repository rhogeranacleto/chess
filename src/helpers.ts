export const classNames = (data: Record<string, boolean>) =>
  Object.entries(data)
    .filter(([, condition]) => condition)
    .reduce(
      (totalClassesNames, [className]) =>
        `${totalClassesNames} ${className}`.trim(),
      '',
    );
