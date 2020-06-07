  $(function() {
  function buildHTML(message){
    if (message.image) {
      let html =
                  `<div class="Message-details" data-message-id=${message.id}>
                    <div class="Message-details__info">
                      <div class="Message-details__info--who">
                        ${message.user_name}
                      </div>
                      <div class="Message-details__info--when">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="Message-details__content">
                      <p class="Message__content">
                        ${message.content}
                      </p>
                      <img class="Message__image" src="${message.image}">
                    </div>
                  </div>`
      return html;
    } else {
      let html = 
                  `<div class="Message-details" data-message-id=${message.id}>
                    <div class="Message-details__info">
                      <div class="Message-details__info--who">
                        ${message.user_name}
                      </div>
                      <div class="Message-details__info--when">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="Message-details__content">
                      <p class="Message__content">
                        ${message.content}
                      </p>
                    </div>
                  </div>`
      return html;
    };
  }

  let reloadMessages = function() {
    let last_message_id = $('.Message-details:last').data("message-id");
    console.log(last_message_id)
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      console.log(messages)
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.Message-field').append(insertHTML);
        $('.Message-field').animate({ scrollTop: $('.Message-field')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };

  setInterval(reloadMessages, 7000);
  });
