import { useBook } from 'hooks/useBook';
import { Wrapper } from './HomeFooter.styles';

interface HomeFooterProps {
  page: number;
  totalPages: number;
}

const HomeFooter = ({ page, totalPages }: HomeFooterProps) => {
  const { nextPage, previousPage } = useBook();

  const handleClickNext = () => {
    if (page < totalPages) {
      nextPage(Number(page));
    }
  };

  const handleClickPrevious = () => {
    if (page >= 1) {
      previousPage(Number(page));
    }
  };

  return (
    <Wrapper>
      <span>
        Página {page} de {Math.ceil(totalPages)}
      </span>
      <button type="button" onClick={handleClickPrevious}>
        <img src="/images/prev.png" alt="Página Anterior" />
      </button>

      <button type="button" onClick={handleClickNext}>
        <img src="/images/next.png" alt="Página Seguinte" />
      </button>
    </Wrapper>
  );
};

export default HomeFooter;
