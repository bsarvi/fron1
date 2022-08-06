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
  InputNumber,
  Select,
} from "formik-antd";
import { message, Button, Row, Col, Typography, Divider, Space } from "antd";
import * as Yup from "yup";
import axios from "axios";
const { Title } = Typography;

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

const AddSeatForm = () => {
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
          axios
            .post("http://localhost:8000/admission-service/add-seat", values)
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          message.success("Seat added successfully");
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
          <Form layout="vertical">
            <Space direction="vertical">
              <FormItem name="department" label="Department">
                <Select
                  name="department"
                  allowClear
                  placeholder="Select something"
                  style={{ width: "100%" }}
                >
                  <Select.Option value="it">
                    Inforamtion Technology Enginering
                  </Select.Option>
                  <Select.Option value="cs">
                    Computer Science Enginering
                  </Select.Option>
                  <Select.Option value="ene">
                    Electrical And Electronics Enginering
                  </Select.Option>
                  <Select.Option value="mech">
                    Mechanical Enginering
                  </Select.Option>
                  <Select.Option value="civil">Civil Enginering</Select.Option>
                  <Select.Option value="etc">
                    Electronics And Telecomunication Engineering
                  </Select.Option>
                </Select>
              </FormItem>
            </Space>
            <Divider orientation="left">General</Divider>
            <Space size="middle">
              <FormItem name="genTfw" label="TFW">
                <InputNumber name="genTfw" />
              </FormItem>
              <FormItem name="genOpen" label="Open">
                <InputNumber name="genOpen" />
              </FormItem>
              <FormItem name="genPwd" label="Pwd">
                <InputNumber name="genPwd" />
              </FormItem>
              <FormItem name="genFf" label="Ff">
                <InputNumber name="genFf" />
              </FormItem>
              <FormItem name="genGn" label="Gn">
                <InputNumber name="genGn" />
              </FormItem>
            </Space>
            <Divider orientation="left">Other</Divider>
            <Space size="middle">
              <FormItem name="otherEsm" label="Esm">
                <InputNumber name="otherEsm" />
              </FormItem>
              <FormItem name="otherNri" label="Nri">
                <InputNumber name="otherNri" />
              </FormItem>
              <FormItem name="otherCsp" label="Csp">
                <InputNumber name="otherCsp" />
              </FormItem>
              <FormItem name="otherSc" label="Sc">
                <InputNumber name="otherSc" />
              </FormItem>
              <FormItem name="ews" label="Ews">
                <InputNumber name="ews" />
              </FormItem>
            </Space>
            <Divider orientation="left">SC</Divider>
            <Space size="middle">
              <FormItem name="stOpen" label="Open">
                <InputNumber name="stOpen" />
              </FormItem>
              <FormItem name="stPwd" label="Pwd">
                <InputNumber name="stPwd" />
              </FormItem>
              <FormItem name="stFf" label="Ff">
                <InputNumber name="stFf" />
              </FormItem>
              <FormItem name="stGn" label="Gn">
                <InputNumber name="stGn" />
              </FormItem>
            </Space>
            <Divider orientation="left">OBC</Divider>
            <Space size="middle">
              <FormItem name="obcOpen" label="Open">
                <InputNumber name="obcOpen" />
              </FormItem>
              <FormItem name="obcPwd" label="Pwd">
                <InputNumber name="obcPwd" />
              </FormItem>
              <FormItem name="obcFf" label="Ff">
                <InputNumber name="obcFf" />
              </FormItem>
              <FormItem name="obcGn" label="Gn">
                <InputNumber name="obcGn" />
              </FormItem>
            </Space>
            <br></br>
            <Space>
              <ResetButton>Reset</ResetButton>
              <SubmitButton disabled={false} >Submit</SubmitButton>
            </Space>
          </Form>
        )}
      />
    </div>
  );
};

export default AddSeatForm;
