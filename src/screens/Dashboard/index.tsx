import React, { useEffect, useState } from "react";
import { useIsFocused } from '@react-navigation/native';

import { Image } from 'react-native'
import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionProps,
} from "../../components/TransactionCard";

import logoImage from '../../images/logo.png'
import api from "../../services/api";

import * as S from "./styles";

export type DataListProps = {
  id: string;
} & TransactionProps;

type Balance = {
  income?: string
  outcome?: string
  total?: string
}

export const Dashboard = () => {
  const [transactions, setTransactions] = useState<DataListProps[]>([]); 
  const [balance, setBalance] = useState<Balance>({});

  const isFocused = useIsFocused();
  
  useEffect(() => {
    const getTransactions = async () => {
      const response = await api.get("/transactions");
      setTransactions(response.data);
    }
    getTransactions();
  }, [isFocused]);

  useEffect(() => {
    const getSummary = transactions?.reduce((acc: any, transaction: any) => {
        if (transaction?.type === 1) {
          acc.income += Number(transaction.amount);
          acc.total += Number(transaction.amount);
        } else {
          acc.outcome += Number(transaction.amount);
          acc.total += Number(transaction.amount);
        }
        return acc;
      }, { income: 0, outcome: 0, total: 0 });

      setBalance(getSummary);
  }, [transactions, isFocused])

  return (
    <S.Wrapper>
      <S.Header>
        <Image source={logoImage} />
       <S.HeaderTitle>Finances</S.HeaderTitle>
      </S.Header>

      <S.HighlightCards>
        <HighlightCard
          type="income"
          title="Income"
          amount={balance ? balance.income! : ""}
        />

        <HighlightCard
          type="outcome"
          title="Outcome"
          amount={balance ? balance.outcome! : ""}
        />

        <HighlightCard
          type="total"
          title="Total"
          amount={balance ? balance.total! : ""}
        />
      </S.HighlightCards>

      <S.Transactions>
        <S.Title>Transactions</S.Title>

        <S.TransactionList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </S.Transactions>
    </S.Wrapper>
  );
};
