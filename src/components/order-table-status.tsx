type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderTableStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, { text: string; color: string }> = {
  pending: {
    text: 'Pendente',
    color: 'bg-slate-400',
  },
  canceled: {
    text: 'Cancelado',
    color: 'bg-rose-500',
  },
  processing: {
    text: 'Em andamento',
    color: 'bg-amber-500',
  },
  delivering: {
    text: 'Em rota de entrega',
    color: 'bg-amber-500',
  },
  delivered: {
    text: 'Entregue',
    color: 'bg-emerald-500',
  },
}

export function OrderTableStatus({ status }: OrderTableStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        data-testid="badge"
        className={`h-2 w-2 rounded-full ${orderStatusMap[status].color}`}
      ></span>
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status].text}
      </span>
    </div>
  )
}
