/**
 * Preview confirmation for concept-mock forms.
 * Shows a local success message and does not transmit field values.
 */
(function () {
  const forms = document.querySelectorAll("form[data-mock-form]");

  forms.forEach(function (form) {
    const status = form.querySelector("[data-mock-status]");
    const submit = form.querySelector('[type="submit"]');
    const originalLabel = submit ? submit.textContent : "";

    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        return;
      }

      event.preventDefault();

      if (submit) {
        submit.disabled = true;
        submit.textContent = "Request noted";
      }

      if (!status) {
        return;
      }

      const lead = document.createElement("strong");
      lead.textContent = "Request noted on this preview. ";

      const mail = document.createElement("a");
      mail.href = "mailto:sundayosogbuyi@elraphagroups.com";
      mail.textContent = "sundayosogbuyi@elraphagroups.com";

      status.replaceChildren(
        lead,
        document.createTextNode("Nothing was sent. To begin for real, email "),
        mail,
        document.createTextNode(".")
      );
      status.hidden = false;
      status.focus();
    });

    if (submit) {
      submit.dataset.originalLabel = originalLabel;
    }
  });
})();
