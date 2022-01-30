import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export default function formatDate(date: string | Date) {
  const parsedDate = parseISO(String(date));

  return format(parsedDate, "dd 'de' MMMM', 'yyyy'", {
    locale: ptBR,
  });
}
