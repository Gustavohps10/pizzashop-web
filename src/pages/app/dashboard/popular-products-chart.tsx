import { BarChart } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const data = [
  { product: 'Pepperoni', amount: 17 },
  { product: 'Calabreso', amount: 74 },
  { product: 'Mussarelo', amount: 53 },
  { product: '4 queijos', amount: 32 },
  { product: 'Portuguesa', amount: 12 },
  { product: 'Marguerita', amount: 4 },
]

const COLORS = [
  colors.sky['500'],
  colors.amber['500'],
  colors.violet['500'],
  colors.emerald['500'],
  colors.rose['500'],
]

export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              cornerRadius={4}
              cx="50%"
              cy="50%"
              data={data}
              dataKey="amount"
              fill="#8884d8"
              innerRadius={60}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180
                const radius = 12 + innerRadius + (outerRadius - innerRadius)
                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                const y = cy + radius * Math.sin(-midAngle * RADIAN)

                return (
                  <text
                    className="fill-muted-foreground text-xs"
                    dominantBaseline="central"
                    textAnchor={x > cx ? 'start' : 'end'}
                    x={x}
                    y={y}
                  >
                    {data[index].product.length > 12
                      ? data[index].product.substring(0, 12).concat('...')
                      : data[index].product}{' '}
                    ({value})
                  </text>
                )
              }}
              nameKey="product"
              outerRadius={80}
              paddingAngle={4}
              strokeWidth={0}
            >
              {data.map((_, index) => (
                <Cell fill={COLORS[index]} key={`cell-${index}`} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
