import { Button } from "react-native";

import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { FadeInView } from "../../../animations/fade.animation";
import { HomeContainer, InputContainer } from "./home.styles";

import { colors } from "../../../infrastructure/theme/colors";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/text/text.component";
import {
  createCompanyDocumentFromInputs,
  getCompanies,
} from "../../../utils/firebase/firebase.utils";
import { getDoc } from "firebase/firestore";

export default function HomeScreen({ navigation }) {
  const [snapShot, setSnapShot] = useState({});
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: "",
      Industry: "",
      Location: "",
      Description: "",
    },
  });

  const onSubmit = async (data) => {
    const companyDocRef = await createCompanyDocumentFromInputs(data);
    const companySnapShot = getDoc(companyDocRef);

    setSnapShot(companySnapShot);
    reset({
      Name: "",
      Industry: "",
      Location: "",
      Description: "",
    });
  };

  useEffect(() => {
    async function getData() {
      const companyData = await getCompanies();
    }

    getData();
  }, [snapShot]);

  return (
    <HomeContainer>
      <Text variant="label">Enter your Company Details.</Text>
      <Spacer position="bottom" size="medium" />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Name"
            mode="outlined"
            onChangeText={onChange}
            value={value}
            activeOutlineColor={colors.text.success}
          />
        )}
        name="Name"
      />
      {errors.Name && <Text variant="error">Company Name is required.</Text>}
      <Spacer position="bottom" size="medium" />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Industry"
            mode="outlined"
            onChangeText={onChange}
            value={value}
            activeOutlineColor={colors.text.success}
          />
        )}
        name="Industry"
      />
      {errors.Industry && <Text variant="error">Industry is required.</Text>}
      <Spacer position="bottom" size="medium" />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="location"
            mode="outlined"
            onChangeText={onChange}
            value={value}
            activeOutlineColor={colors.text.success}
          />
        )}
        name="Location"
      />
      {errors.Location && <Text variant="error">Location is required.</Text>}
      <Spacer position="bottom" size="medium" />

      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 10,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Description"
            mode="outlined"
            multiline={true}
            numberOfLines={5}
            onChangeText={onChange}
            value={value}
            activeOutlineColor={colors.text.success}
          />
        )}
        name="Description"
      />
      {errors.Description && (
        <Text variant="error">Company Description is too short.</Text>
      )}
      <Spacer position="bottom" size="large" />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </HomeContainer>
  );
}
