$(function(){
  function buildHTML(message){
    if (message.image !== null {
      img = '<img src ="${message.image.url}">'}
      var img =
        `<p class= "lower-message__content"></p>
        <img src="${message.image}">`

      var html =
      `<div class="message" data-message-id="${message.id}">
        <div class="message__info">
          <div class="message__info__talker">
            ${message.user_name}
          </div>
          <div class="message__info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="message__text">
          <p class= "message__text__a">
          ${message.content}
          </p>
          ${message.image == null ? "" : '<img src="' + message.image + '">'}
        </div>
      </div>`
    return html;
  })
  $("#new_message").on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action")
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $(".messages").append(html);
      $("#new_message")[0].reset();
      $(".messages").animate({scrollTop: $(".messages")[0].scrollHeight})
      $(".send__submit-btn").prop("disabled", false);
    })
    .fail(function(data){
      alert("エラーが発生したため送信できませんでした");
    })
  })
})