import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export interface OrderDetailsProps {}

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: a8fd3f2d34390a3d</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">Joãozinho 1234</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                (44) 11111-1111
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Email</TableCell>
              <TableCell className="flex justify-end">
                joaozinho@gmail.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há
              </TableCell>
              <TableCell className="flex justify-end">5 minutos</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <h1 className="font-semibold">Itens do pedido</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Qtd</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Pizza Pepperoni familia</TableCell>
              <TableCell className="text-right">10</TableCell>
              <TableCell className="text-right">R$10,00</TableCell>
              <TableCell className="text-right">RS100,00</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Pizza Pepperoni familia</TableCell>
              <TableCell className="text-right">10</TableCell>
              <TableCell className="text-right">R$10,00</TableCell>
              <TableCell className="text-right">RS100,00</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do pedido</TableCell>
              <TableCell className="text-right">RS100,00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
