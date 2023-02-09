import {Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Planner = () => {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Label>Most Important Task</Form.Label>
          <Form.Control id="task1" placeholder="Task 1" />
        </Col>
        <Col>
          <Form.Select
            id="task1_target"
            aria-label="Set Target Session count (30mins/session)"
          >
            <option>Set Target Session count (30mins/session)</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select id="task1_actual" aria-label="Actual Session Count">
          <option>Actual Session Count</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Second Most Important Task</Form.Label>
          <Form.Control id="task2" placeholder="Task 1" />
        </Col>
        <Col>
          <Form.Select
            id="task2_target"
            aria-label="Set Target Session count (30mins/session)"
          >
            <option>Set Target Session count (30mins/session)</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select id="task2_actual" aria-label="Actual Session count">
          <option>Actual Session Count</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Third Most Important Task</Form.Label>
          <Form.Control id="task3" placeholder="Task 1" />
        </Col>
        <Col>
          <Form.Select
            id="task3_target"
            aria-label="Set Target Session count (30mins/session)"
          >
            <option>Set Target Session count (30mins/session)</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select id="task3_actual" aria-label="Actual Session count">
          <option>Actual Session Count</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Fourth Task</Form.Label>
          <Form.Control id="task4" placeholder="Task 1" />
        </Col>
        <Col>
          <Form.Select
            id="task4_target"
            aria-label="Set Target Session count (30mins/session)"
          >
            <option>Set Target Session count (30mins/session)</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select id="task4_actual" aria-label="Actual Session count">
          <option>Actual Session Count</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Fifth Task</Form.Label>
          <Form.Control id="task5" placeholder="Task 1" />
        </Col>
        <Col>
          <Form.Select
            id="task5_target"
            aria-label="Set Target Session count (30mins/session)"
          >
            <option>Set Target Session count (30mins/session)</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select id="task5_actual" aria-label="Actual Session count">
          <option>Actual Session Count</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Planner;
