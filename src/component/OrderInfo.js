import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

// action
import { sendOrderForm } from '../ducks/order';

const mapDispatchToProps = dispatch => ({
  sendOrderForm: values => dispatch(sendOrderForm(values))
});

class OrderInfo extends Component {
  static propTypes = {
  }

  constructor() {
    super();
    this._closeModal = this._closeModal.bind(this);
  }

  _closeModal() {
    console.log('close modal');
  }

  render() {
    return (
      <Container fluid className="order-info-main-component">
        <div className="order-info-title">주문 성공</div>
        <div className="order-info-body">
          <div className="body-text">
            주문이 성공적으로 접수 되었습니다. 해당 금액 '50,000원'을 아래 계좌로 입금 하시면, 10분 이내로 확인 연락을 드리도록 하겠습니다.
          </div>
          <div className="body-list">
            <li>입금 금액: 50,000원</li>
            <li>입금 계좌: 123-456-789</li>
            <li>은행명: 국민은행</li>
            <li>계좌주: 구일모</li>
          </div>
          <div className="body-confirm-button">
            <Button className="order-info confirm-button" onClick={this._closeModal}>확인</Button>
          </div>
        </div>
      </Container>
    );
  }
}

export default connect(null, mapDispatchToProps)(OrderInfo);