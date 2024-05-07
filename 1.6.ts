{
    function addNumber(a: number, b: number): number {
        return a + b;
    }

    const poorUser: {
        id: number;
        name: string;
        address: string;
        balance: number;
    } = {
        id: 12,
        name: "John",
        address: "USa",
        balance: 20,

        addBanance(balance: number): number {
            return this.balance + balance;
        },
    };

    const numbers: number[] = [1, 2, 3, 4, 5, 6];

    const square: number[] = numbers.map((a: number): number => a * a);




    
}
