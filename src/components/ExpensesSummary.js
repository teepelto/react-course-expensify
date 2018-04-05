import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenseCount, expenseCountAll, expensesTotal }) => {
    const expenseWord = expenseCountAll === 1 ? 'expense' : 'expenses';
    const formattedTotal = numeral(expensesTotal).format('$0,0.00');
    
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expenseCount}</span> out of <span>{expenseCountAll}</span> {expenseWord} totalling <span>{formattedTotal}</span>.
                    <div className="page-header__actions">
                        <Link className="button" to="/create">Add Expense</Link>
                    </div>
                </h1>
            </div>
        </div>        
    );
};

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: expenses.length,
        expenseCountAll: state.expenses.length,
        expensesTotal: selectExpensesTotal(expenses) / 100
    };
};

export default connect(mapStateToProps)(ExpensesSummary);