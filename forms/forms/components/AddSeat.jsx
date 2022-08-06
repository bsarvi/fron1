import * as React from "react";
import { Formik } from "formik";
import {
  SubmitButton,
  Input,
  Checkbox,
  ResetButton,
  FormikDebug,
  Form,
  FormItem,
} from "formik-antd";
import { message, Button } from "antd";
import * as Yup from "yup";

const addSeatSchema = Yup.object().shape({
  department: Yup.string().required("Required"),
  genTfw: Yup.number().required("Required"),
  genOpen: Yup.number().required("Required"),
  genPwd: Yup.number().required("Required"),
  genFf: Yup.number().required("Required"),
  genGn: Yup.number().required("Required"),
  stOpen: Yup.number().required("Required"),
  stPwd: Yup.number().required("Required"),
  stFf: Yup.number().required("Required"),
  stGn: Yup.number().required("Required"),
  obcOpen: Yup.number().required("Required"),
  obcPwd: Yup.number().required("Required"),
  obcFf: Yup.number().required("Required"),
  obcGn: Yup.number().required("Required"),
  otherEsm: Yup.number().required("Required"),
  otherNri: Yup.number().required("Required"),
  otherCsp: Yup.number().required("Required"),
  otherSc: Yup.number().required("Required"),
  ews: Yup.number().required("Required"),
  ewsPwd: Yup.number().required("Required"),
});

const AddSeat = () => {
  return (
    <div
      style={{
        marginTop: 80,
        maxWidth: 700,
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <Formik
        initialValues={{
          department: "",
          genTfw: "",
          genOpen: "",
          genPwd: "",
          genFf: "",
          genGn: "",
          stOpen: "",
          stPwd: "",
          stFf: "",
          stGn: "",
          obcOpen: "",
          obcPwd: "",
          obcFf: "",
          obcGn: "",
          otherEsm: "",
          otherNri: "",
          otherCsp: "",
          otherSc: "",
          ews: "",
        }}
        validationSchema={addSeatSchema}
        onSubmit={(values, actions) => {
          message.info(JSON.stringify(values, null, 4));
          actions.setSubmitting(false);
          actions.resetForm();
        }}
        validate={(values) => {
          if (!values.lastName) {
            return { lastName: "required" };
          }
          return {};
        }}
        render={() => (
          <Form style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <Button.Group style={{ marginBottom: 20 }}>
                <ResetButton>Reset</ResetButton>
                <SubmitButton>Submit</SubmitButton>
              </Button.Group>

              <FormItem name="department" label="Department">
                <Input name="department" placeholder="Department" />
              </FormItem>
              <FormItem name="genTfw" label="General TFW">
                <Input name="genTfw" placeholder="General TFW" />
              </FormItem>
              <FormItem name="genOpen" label="General Open">
                <Input name="genOpen" placeholder="General Open" />
              </FormItem>
              <FormItem name="genPwd" label="General PWD">
                <Input name="genPwd" placeholder="General PWD" />
              </FormItem>
              <FormItem name="genFf" label="General FF">
                <Input name="genFf" placeholder="General FF" />
              </FormItem>
              <FormItem name="genGn" label="General GN">
                <Input name="genGn" placeholder="General GN" />
              </FormItem>
              <FormItem name="stOpen" label="Student Open">
                <Input name="stOpen" placeholder="Student Open" />
              </FormItem>
              <FormItem name="stPwd" label="Student PWD">
                <Input name="stPwd" placeholder="Student PWD" />
              </FormItem>
              <FormItem name="stFf" label="Student FF">
                <Input name="stFf" placeholder="Student FF" />
              </FormItem>
              <FormItem name="stGn" label="Student GN">
                <Input name="stGn" placeholder="Student GN" />
              </FormItem>
              <FormItem name="obcOpen" label="OBC Open">
                <Input name="obcOpen" placeholder="OBC Open" />
              </FormItem>
              <FormItem name="obcPwd" label="OBC PWD">
                <Input name="obcPwd" placeholder="OBC PWD" />
              </FormItem>
              <FormItem name="obcFf" label="OBC FF">
                <Input name="obcFf" placeholder="OBC FF" />
              </FormItem>
              <FormItem name="obcGn" label="OBC GN">
                <Input name="obcGn" placeholder="OBC GN" />
              </FormItem>
              <FormItem name="otherEsm" label="Other Esm">
                <Input name="otherEsm" placeholder="Other Esm" />
              </FormItem>
              <FormItem name="otherNri" label="Other NRI">
                <Input name="otherNri" placeholder="Other NRI" />
              </FormItem>
              <FormItem name="otherCsp" label="Other CSP">
                <Input name="otherCsp" placeholder="Other CSP" />
              </FormItem>
              <FormItem name="otherSc" label="Other SC">
                <Input name="otherSc" placeholder="Other SC" />
              </FormItem>
              <FormItem name="ews" label="EWS">
                <Input name="ews" placeholder="EWS" />
              </FormItem>
            </div>
            <FormikDebug />
          </Form>
        )}
      />
    </div>
  );
};

export default AddSeat;
