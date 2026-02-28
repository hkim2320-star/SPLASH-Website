const { createApp } = Vue;

createApp({
  data() {
    return {
        locations: [ "Irvine", "Fullerton", "Torrance", "Pasadena", "Carlsbad", "San Diego" ,"San Jose", "Sacramento", "Denver"],
        form: {
            name: "",
            email: "",
            topic: "",
            location: "",
            contactMethod: "Email",
            phone: "",
            isNewStudent: false,
            message: ""
        },
        errorMsg: "",
        successMsg: ""
    };
  },
  methods: {
    submitForm() {
      this.errorMsg = "";
      this.successMsg = "";

      if (this.form.contactMethod === "Phone" && !this.form.phone.trim()) {
        this.errorMsg = "Please provide a phone number for contact.";
        return;
      }

      this.successMsg = "Thanks! Your message has been submitted successfully :)";

      this.form = {
        name: "",
        email: "",
        topic: "",
        location: "",
        contactMethod: "Email",
        phone: "",
        isNewStudent: false,
        message: ""
      };
    }
    }
}).mount("#contactVue");