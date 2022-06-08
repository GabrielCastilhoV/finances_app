import React, { useEffect, useState } from "react";
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

export const Dashboard = () => {
  const [transactions, setTransactions] = useState<DataListProps[]>([]); 

  useEffect(() => {
    const getTransactions = async () => {
      const response = await api.get("/transactions");
      setTransactions(response.data);
    }
    getTransactions();
  }, []);

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
          amount="$ 10.000,00"
        />

        <HighlightCard
          type="outcome"
          title="Outcome"
          amount="$ 2.000,00"
        />

        <HighlightCard
          type="total"
          title="Total"
          amount="$ 8.000,00"
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
