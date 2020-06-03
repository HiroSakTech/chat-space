$(function() {

  function buildHTML(message){
    if (message.image) {
      let html = `<div class="Message-details">
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
                  `<div class="Message-details">
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

  $('.Message-form__contents').on('submit',function(e) {
    e.preventDefault()
    let url = $(this).attr('action')
    let formData = new FormData(this);
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);   
      $('.Message-field').append(html); 
      $('.Message-Field').animate({ scrollTop: $('.Message-field')[0].scrollHeight});
      $('form')[0].reset();
      $('.Message-form__contents--btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  })
})