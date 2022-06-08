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
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";

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
  const [transactionType, setTransactionType] = useState<number>(0);
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);

  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  const link = useNavigation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function handleTransactionsTypeSelect(type: 1 | 2) {
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalVisible(true);
  }

  async function handleRegister(form: Partial<FormData>) {
    if (!transactionType) {
      return Alert.alert("Select transaction type!");
    }

    if (category.key === "category") {
      return Alert.alert("Select category!");
    }

    await api.post("/transactions", {
      description: form.name,
      amount: form.amount,
      type: transactionType,
      category: category.key,
    })

    reset();
    link.navigate("Dashboard");
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
              placeholder="Title"
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
                onPress={() => handleTransactionsTypeSelect(1)}
                isActive={transactionType === 1}
              />
              <TransactionButton
                type="outcome"
                title="Outcome"
                onPress={() => handleTransactionsTypeSelect(2)}
                isActive={transactionType === 2}
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
