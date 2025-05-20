import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactUs from "../components/ContactUs"

const ContactPage = () => (
  <Layout>
    <ContactUs />
  </Layout>
)

export const Head = () => <Seo title="Contact Us" />

export default ContactPage 