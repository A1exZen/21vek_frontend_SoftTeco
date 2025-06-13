import React from 'react';
import styles from './styles.module.scss';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const OptionGroup = ({ title, options, selected, onSelect }) => (
  <div className={styles['product-options__group']}>
    <div className={styles['product-options__label']}>{title}</div>
    <div className={styles['product-options__options']}>
      {options.map((option: never) => (
        <button
          key={option}
          className={`${styles['product-options__option']} ${
            selected === option ? styles['product-options__option--active'] : ''
          }`}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

export const ProductOptions = () => {
  const [condition, setCondition] = React.useState('новый');
  const [sim, setSim] = React.useState('1');
  const [memory, setMemory] = React.useState('128 ГБ');
  const [color, setColor] = React.useState('синий');

  return (
    <div className={styles['product-options']}>
      <OptionGroup
        title="Состояние"
        options={['новый', 'отличное (А)', 'хорошее (В)']}
        selected={condition}
        onSelect={setCondition}
      />
      <OptionGroup
        title="Кол-во SIM-карт"
        options={['1', '2']}
        selected={sim}
        onSelect={setSim}
      />
      <OptionGroup
        title="Постоянная память"
        options={['128 ГБ', '256 ГБ']}
        selected={memory}
        onSelect={setMemory}
      />
      <OptionGroup
        title="Цвет"
        options={['желтый', 'звездный', 'звездный свет', 'красный', 'полуночный', 'синий', 'фиолетовый']}
        selected={color}
        onSelect={setColor}
      />
    </div>
  );
};