import React, { useState } from "react";
import { v4 } from "uuid";
import { Button, Form, Modal } from "react-bootstrap";

import DebtCard from "../components/card/DebtCard";

const DebtsPage = () => {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [debts, setDebts] = useState([
    { id: "0", name: "Nuriddin", debt: 100, phone: "901347432" },
    { id: "1", name: "Diyorbek", debt: 200, phone: "901347434" },
  ]);

  const [debt, setDebt] = useState({ name: "", debt: "", phone: "" });
  const [select, setSelected] = useState(null);

  const handleClose = () => {
    setShow(false);
    setValidated(false);
  };

  const handleShow = () => setShow(true);

  const submit = (e) => {
    const form = e.currentTarget;
    setValidated(true);
    e.preventDefault();
    if (form.checkValidity()) {
      if (select === null) {
        setDebts([...debts, { ...debt, debt: +debt.debt, id: v4() }]);
      } else {
        let newDebts = debts.map((el) => {
          if (el.id === select) {
            return debt;
          }
          return el;
        });
        setDebts(newDebts);
      }
      handleClose();
    }
  };

  const hanldeDebt = (e) => {
    setDebt({ ...debt, [e.target.id]: e.target.value });
  };

  const editDebt = (id) => {
    handleShow();
    setSelected(id);
    let debt = debts.find((el) => el.id === id);
    setDebt(debt);
  };

  const openDebtMOdal = () => {
    handleShow();
    setSelected(null);
    setDebt({ name: "", debt: "", phone: "" });
  };

  const deleteDebt = (id) => {
    let newDebts = debts.filter((el) => el.id !== id);
    setDebts(newDebts);
  };

  return (
    <section className="section-bg">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="mt-3 text-center"> All DebtsPage</h1>
        <button className="btn btn-success" onClick={openDebtMOdal}>
          Add
        </button>
      </div>
      {debts.map((debt) => (
        <DebtCard
          editDebt={editDebt}
          deleteDebt={deleteDebt}
          key={debt.id}
          {...debt}
        />
      ))}
      <Modal show={show} onHide={handleClose} className="modal-bg">
        <Form noValidate validated={validated} onSubmit={submit}>
          <Modal.Header closeButton>
            <Modal.Title>Debt data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={hanldeDebt}
                value={debt.name}
                required
                type="text"
                placeholder="Full name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Pleace fill
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                onChange={hanldeDebt}
                value={debt.phone}
                required
                type="text"
                placeholder="+998901347432"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Pleace fill
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="debt">
              <Form.Label>Debt $</Form.Label>
              <Form.Control
                onChange={hanldeDebt}
                value={debt.debt}
                required
                type="number"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Pleace fill
              </Form.Control.Feedback>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              {select === null ? "Add" : "Save"} debt
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </section>
  );
};

export default DebtsPage;
