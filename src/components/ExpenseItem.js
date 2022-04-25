import './ExpenseItem.css'

const ExpenseItem = () => {
    const expenseDate = new Date(2022,7,10);
    const expenseTitle = 'Car Insurance'
    const expenseAmount = 298;
  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
