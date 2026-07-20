const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})

export const DailyBudget = ({ value }) => {
    return (
        <p className="text-primary-highlight text-[39px] font-bold leading-[125%] m-0">
            {formatter.format(value)}
        </p>
    )
}