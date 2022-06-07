import React, { useState } from "react";
import {
  Modal,
  Alert,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { CategorySelect } from "../CategorySelect";

import { InputForm } from "../../components/Forms/InputForm";
import { Button } from "../../components/Forms/Button";
import { TransactionButton } from "../../components/Forms/TransactionButton";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";

import * as S from "./styles";

type FormData = {
  name: string;
  amount: string;
};

const schema = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  amount: Yup.string()
    .typeError("Enter a numeric value")
    .required("Amount is Required"),
});

export const Register = () => {
  const [transactionType, setTransactionType] = useState("");
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);

  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function handleTransactionsTypeSelect(type: "income" | "outcome") {
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalVisible(true);
  }

  function handleRegister(form: Partial<FormData>) {
    if (!transactionType) {
      return Alert.alert("Select transaction type!");
    }

    if (category.key === "category") {
      return Alert.alert("Select category!");
    }

    const newTransaction = {
      id: 1,
      name: form.name,
      amount: form.amount,
      type: transactionType,
      category: category.key,
      date: new Date(),
    };

    console.log(newTransaction);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Wrapper>
        <S.Header>
          <S.Title>Register</S.Title>
        </S.Header>

        <S.Form>
          <S.Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Name"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name?.message}
            />

            <InputForm
              name="amount"
              control={control}
              placeholder="Amount"
              keyboardType={
                Platform.OS === "ios" ? "numbers-and-punctuation" : "numeric"
              }
              error={errors.name?.message}
            />

            <S.TransactionsContainer>
              <TransactionButton
                type="income"
                title="Income"
                onPress={() => handleTransactionsTypeSelect("income")}
                isActive={transactionType === "income"}
              />
              <TransactionButton
                type="outcome"
                title="Outcome"
                onPress={() => handleTransactionsTypeSelect("outcome")}
                isActive={transactionType === "outcome"}
              />
            </S.TransactionsContainer>

            <CategorySelectButton
              title={category.name}
              onPress={handleOpenSelectCategoryModal}
            />
          </S.Fields>

          <Button title="Create" onPress={handleSubmit(handleRegister)} />
        </S.Form>

        <Modal visible={categoryModalVisible}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={() => setCategoryModalVisible(false)}
          />
        </Modal>
      </S.Wrapper>
    </TouchableWithoutFeedback>
  );
};
