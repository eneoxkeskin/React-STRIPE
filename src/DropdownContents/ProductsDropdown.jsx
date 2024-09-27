import React, { useState } from "react";
import styled from "styled-components";
import {
  FaCreditCard,
  FaFileInvoiceDollar,
  FaUsers,
  FaCheckSquare,
  FaLink,
  FaShieldAlt,
  FaTerminal,
  FaMoneyCheckAlt,
  FaIdCard,
  FaChartBar,
  FaDatabase,
  FaFlag,
  FaLeaf,
  FaSyncAlt,
  FaMoneyBillWave,
  FaReceipt,
  FaCube,
  FaCoins,
  FaProjectDiagram,
  FaPiggyBank,
  FaFileInvoice,
  FaClipboardCheck,
  FaFileAlt,
  FaWarehouse,
  FaRocket
} from "react-icons/fa";
import { Heading } from "./Components";

const ProductsDropdownEl = styled.div`
  width: 45rem;
  display: flex;
  padding: 1rem;
  background: white;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Sidebar = styled.div`
  flex: 1;
  border-right: 1px solid #e0e0e0;
`;

const MainContent = styled.div`
  flex: 3;
  padding: 1rem;
`;

const MenuItem = styled.div`
  padding: 1rem;
  cursor: pointer;
  background: ${({ active }) => (active ? "#f5f5f5" : "white")};

  &:hover {
    background: #f5f5f5;
  }
`;

const ProductItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ProductInfo = styled.div`
  margin-left: 1rem;

  p {
    margin: 0;
  }
`;

const ProductLogo = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 100%;
  opacity: 0.6;
  background-color: ${({ color }) => `var(--${color})`};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const ProductsDropdown = () => {
  const [activeMenu, setActiveMenu] = useState("Global Payments");

  const renderContent = () => {
    switch (activeMenu) {
      case "Global Payments":
        return (
          <div style={{ display: "flex" }}>
            <Column>
              <ProductItem>
                <ProductLogo color="blue">
                  <FaCreditCard />
                </ProductLogo>
                <ProductInfo>
                  <Heading color="blue">Payments</Heading>
                  <p>Online payments</p>
                </ProductInfo>
              </ProductItem>
              <ProductItem>
                <ProductLogo color="purple">
                  <FaCheckSquare />
                </ProductLogo>
                <ProductInfo>
                  <Heading color="purple">Checkout</Heading>
                  <p>Prebuilt payment form</p>
                </ProductInfo>
              </ProductItem>
              <ProductItem>
                <ProductLogo color="green">
                  <FaCube />
                </ProductLogo>
                <ProductInfo>
                  <Heading color="green">Elements</Heading>
                  <p>Customizable payments UIs</p>
                </ProductInfo>
              </ProductItem>
              <ProductItem>
                <ProductLogo color="teal">
                  <FaLink />
                </ProductLogo>
                <ProductInfo>
                  <Heading color="teal">Payment Links</Heading>
                  <p>No-code payments</p>
                </ProductInfo>
              </ProductItem>
              <ProductItem>
                <ProductLogo color="red">
                  <FaShieldAlt />
                </ProductLogo>
                <ProductInfo>
                  <Heading color="red">Radar</Heading>
                  <p>Fraud & risk management</p>
                </ProductInfo>
              </ProductItem>
            </Column>
            <Column>
              <ProductItem>
                <ProductLogo color="orange">
                  <FaUsers />
                </ProductLogo>
                <ProductInfo>
                  <Heading color="orange">Connect</Heading>
                  <p>Payments for platforms</p>
                </ProductInfo>
              </ProductItem>
              <ProductItem>
                <ProductLogo color="yellow">
                  <FaFileInvoice />
                </ProductLogo>
                <ProductInfo>
                  <Heading color="yellow">Billing</Heading>
                  <p>Subscription management</p>
                </ProductInfo>
              </ProductItem>
              <ProductItem>
                <ProductLogo color="green">
                  <FaFileInvoiceDollar />
                </ProductLogo>
                <ProductInfo>
                  <Heading color="green">Invoicing</Heading>
                  <p>Online invoices</p>
                </ProductInfo>
              </ProductItem>
              <ProductItem>
                <ProductLogo color="blue">
                  <FaTerminal />
                </ProductLogo>
                <ProductInfo>
                  <Heading color="blue">Terminal</Heading>
                  <p>In-person payments</p>
                </ProductInfo>
              </ProductItem>
              <ProductItem>
                <ProductLogo color="blue">
                  <FaDatabase />
                </ProductLogo>
                <ProductInfo>
                  <Heading color="blue">Financial Connections</Heading>
                  <p>Linked financial account data</p>
                </ProductInfo>
              </ProductItem>
            </Column>
            <Column>
              <ProductItem>
                <ProductLogo color="purple">
                  <FaIdCard />
                </ProductLogo>
                <ProductInfo>
                  <Heading color="purple">Identity</Heading>
                  <p>Online identity verification</p>
                </ProductInfo>
              </ProductItem>
              <ProductItem>
                <ProductLogo color="green">
                  <FaLeaf />
                </ProductLogo>
                <ProductInfo>
                  <Heading color="green">Climate</Heading>
                  <p>Carbon removal</p>
                </ProductInfo>
              </ProductItem>
            </Column>
          </div>
        );
      case "Revenue and Finance Automation":
        return (
          <div style={{ display: "flex" }}>
            <Column>
              <ProductItem>
                <ProductLogo color="yellow">
                  <FaFileInvoice />
                </ProductLogo>
                <ProductInfo>
                  <Heading color="yellow">Billing</Heading>
                  <p>Subscription management</p>
                </ProductInfo>
              </ProductItem>
              <ProductItem>
                <ProductLogo color="green">
                  <FaFileInvoiceDollar />
                </ProductLogo>
                <ProductInfo>
                  <Heading color="green">Invoicing</Heading>
                  <p>Online invoices</p>
                </ProductInfo>
              </ProductItem>
              <ProductItem>
                <ProductLogo color="purple">
                  <FaFileAlt />
                </ProductLogo>
                <ProductInfo>
                  <Heading color="purple">Tax</Heading>
                  <p>Sales tax & VAT automation</p>
                </ProductInfo>
              </ProductItem>
              <ProductItem>
                <ProductLogo color="red">
                  <FaClipboardCheck />
                </ProductLogo>
                <ProductInfo>
                  <Heading color="red">Revenue Recognition</Heading>
                  <p>Accounting automation</p>
                </ProductInfo>
              </ProductItem>
            </Column>
            <Column>
              <ProductItem>
                <ProductLogo color="orange">
                  <FaChartBar />
                </ProductLogo>
                <ProductInfo>
                  <Heading color="orange">Sigma</Heading>
                  <p>Custom reports</p>
                </ProductInfo>
              </ProductItem>
              <ProductItem>
                <ProductLogo color="blue">
                  <FaWarehouse />
                </ProductLogo>
                <ProductInfo>
                  <Heading color="blue">Data Pipeline</Heading>
                  <p>Data warehouse sync</p>
                </ProductInfo>
              </ProductItem>
              <ProductItem>
                <ProductLogo color="yellow">
                  <FaRocket />
                </ProductLogo>
                <ProductInfo>
                  <Heading color="yellow">Atlas</Heading>
                  <p>Startup incorporation</p>
                </ProductInfo>
              </ProductItem>
            </Column>
          </div>
        );
      case "Banking-as-a-Service":
        return (
          <div style={{ display: "flex" }}>
            <Column>
              <ProductItem>
                <ProductLogo color="blue">
                  <FaUsers />
                </ProductLogo>
                <ProductInfo>
                  <Heading color="blue">Connect</Heading>
                  <p>Payments for platforms</p>
                </ProductInfo>
              </ProductItem>
              <ProductItem>
                <ProductLogo color="green">
                  <FaCoins />
                </ProductLogo>
                <ProductInfo>
                  <Heading color="green">Capital</Heading>
                  <p>Business financing</p>
                </ProductInfo>
              </ProductItem>
            </Column>
            <Column>
              <ProductItem>
                <ProductLogo color="blue">
                  <FaCreditCard />
                </ProductLogo>
                <ProductInfo>
                  <Heading color="blue">Issuing</Heading>
                  <p>Card creation</p>
                </ProductInfo>
              </ProductItem>
              <ProductItem>
                <ProductLogo color="teal">
                  <FaPiggyBank />
                </ProductLogo>
                <ProductInfo>
                  <Heading color="teal">Treasury</Heading>
                  <p>Banking-as-a-service</p>
                </ProductInfo>
              </ProductItem>
            </Column>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <ProductsDropdownEl>
      <Sidebar>
        <MenuItem
          active={activeMenu === "Global Payments"}
          onMouseEnter={() => setActiveMenu("Global Payments")}
        >
          <Heading>Global Payments</Heading>
          <p>Accept payments online, in person, or through your platform.</p>
        </MenuItem>
        <MenuItem
          active={activeMenu === "Revenue and Finance Automation"}
          onMouseEnter={() => setActiveMenu("Revenue and Finance Automation")}
        >
          <Heading>Revenue and Finance Automation</Heading>
          <p>Grow your business with automated revenue and finance.</p>
        </MenuItem>
        <MenuItem
          active={activeMenu === "Banking-as-a-Service"}
          onMouseEnter={() => setActiveMenu("Banking-as-a-Service")}
        >
          <Heading>Banking-as-a-Service</Heading>
          <p>Embed financial services in your platform or product.</p>
        </MenuItem>
      </Sidebar>
      <MainContent>{renderContent()}</MainContent>
    </ProductsDropdownEl>
  );
};

export default ProductsDropdown;
