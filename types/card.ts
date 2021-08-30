export type Card = {
    id: string,
    numberCard: string,
    name: string,
    expiryEnd: string,
    type: 'debit' | 'credit',
    nameBank: string,
    service: 'visa' | 'master-card'
}