import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export default function formatDate(date: string) {
  const parsedDate = parseISO(date);

  return format(parsedDate, "dd 'de' MMMM', 'yyyy'", {
    locale: ptBR,
  });
}
