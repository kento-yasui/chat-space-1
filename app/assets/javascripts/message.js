$(function(){
  function buildHTML(message){
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
          ${message.image == null ? "" : '<img src="${message.image}">'}
        </div>
      </div>`
    return html;
  }
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
  var reloadMessages = function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      var last_message_id = $('.message').last().data("message-id");
      $.ajax({
        url: 'api/messages',
        type: 'GET',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages) {
        messages.forEach(function(message) {
          insertHTML = buildHTML(message);
          $('.messages').append(insertHTML);
          $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight});
        })
      })
      .fail(function() {
        alert('更新に失敗しました');
      });
    };
  }
  setInterval(reloadMessages, 5000);
})