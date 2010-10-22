
/* The swfUploadPreload event is fired after SWFUpload has determined what
 * features are available but before the Flash Movie is loaded. Returning false
 * from this event prevents SWFUpload from loading. This event can be used to
 * gracefully degrade if the client's browser does not support the features
 * needed.
 */
function swfupload_preload() {
  swfupload_debug("SWFUPLOAD_PRELOAD:", true)
  swfupload_debug(this.support.imageResize, true)
}

/* The xxxxxx event is fired if SWFUpload determines it cannot load or an
 * exception occurs while added the Flash Movie to the document. SWFUpload may
 * not be able to load because the Flash Player is not installed or a version
 * older than 9.0.28 is installed.
 */
function swfupload_load_failed() {
  swfupload_debug("SWFUPLOAD_LOAD_FAILED:", true)
}

/* The swfUploadLoaded event is fired by flashReady. It is settable.
 * swfUploadLoaded is called to let you know that it is safe to call SWFUpload
 * methods.
 */
function swfupload_loaded() {
  swfupload_debug("SWFUPLOAD_LOADED:", true)
}

/* fileDialogStart is fired after selectFile for selectFiles is called. This
 * event is fired immediately before the File Selection Dialog window is
 * displayed. However, the event may not execute until after the Dialog window
 * is closed.
 */
function swfupload_file_dialog_start() {
  swfupload_debug("SWFUPLOAD_FILE_DIALOG_START:", true)
}

/* The fileQueued event is fired for each file that is queued after the File
 * Selection Dialog window is closed.
 */
function swfupload_file_queued(file_obj) {
  swfupload_debug("SWFUPLOAD_FILE_QUEUED(" + file_obj.id + "):", true)
  swfupload_debug("  id: " + file_obj.id, true)
  swfupload_debug("  index: " + file_obj.index, true)
  swfupload_debug("  name: " + file_obj.name, true)
  swfupload_debug("  size: " + file_obj.size, true)
  swfupload_debug("  filestatus: " + file_obj.filestatus, true)
}


/* The fileQueueError event is fired for each file that was not queued after
 * the File Selection Dialog window is closed. A file may not be queued for
 * several reasons such as, the file exceeds the file size, the file is empty
 * or a file or queue limit has been exceeded.
 *
 * The cause of the queue error is specified by the error code parameter. The
 * error code corresponds to a SWFUpload.QUEUE_ERROR constant.
 */
function swfupload_file_queue_error(file_obj, error_code, message) {
  swfupload_debug("SWFUPLOAD_FILE_QUEUE_ERROR:", true)
  swfupload_debug("  id: " + file_obj.id, true)
  swfupload_debug("  index: " + file_obj.index, true)
  swfupload_debug("  name: " + file_obj.name, true)
  swfupload_debug("  size: " + file_obj.size, true)
  swfupload_debug("  filestatus: " + file_obj.filestatus, true)
  swfupload_debug("  error_code: " + error_code, true)
  swfupload_debug("  message: " + message, true)
}

/* The fileDialogComplete event fires after the File Selection Dialog window
 * has been closed and all the selected files have been processed. The 'number
 * of files queued' argument indicates the number of files that were queued
 * from the dialog selection (as opposed to the number of files in the queue).
 *
 * If you want file uploading to begin automatically this is a good place to
 * call 'this.startUpload()'
 */
function swfupload_file_dialog_complete(num_files_selected, num_files_queued, num_total_files_in_queue) {
  swfupload_debug("SWFUPLOAD_FILE_DIALOG_COMPLETE(" + num_files_selected + ", " + num_files_queued + ", " + num_total_files_in_queue +"):", true)
  
  if ( this.getStats().files_queued > 0 ) {
    this.startResizedUpload(this.getFile(0).ID, this.customSettings.thumbnail_width, this.customSettings.thumbnail_height, SWFUpload.RESIZE_ENCODING.JPEG, this.customSettings.thumbnail_quality, false);
  }else {
    swfupload_debug("ALL IMAGES UPLOADED", true)
  }
}

/* uploadStart is called immediately before the file is uploaded. This event
 * provides an opportunity to perform any last minute validation, add post
 * params or do any other work before the file is uploaded.
 *
 * The upload can be cancelled by returning 'false' from uploadStart. If you
 * return 'true' or do not return any value then the upload proceeds. Returning
 * 'false' will cause an uploadError event to fired.
 */
function swfupload_upload_start(file_obj) {
  swfupload_debug("SWFUPLOAD_UPLOAD_START:", true)
}

/* The uploadProgress event is fired periodically by the Flash Control. This
 * event is useful for providing UI updates on the page.
 *
 * Note: Calling startResizedUpload begins the normal Upload Event Chain.
 * However, the Flash Player does not provide periodic uploadProgress events.
 * SWFUpload sends only simulated 0% and 100% uploadProgress events.
 *
 * Note: The Linux Flash Player fires a single uploadProgress event after the
 * entire file has been uploaded. This is a bug in the Linux Flash Player that
 * we cannot work around.
 */
function swfupload_upload_progress(file_obj, bytes_complete, total_bytes) {
  swfupload_debug("SWFUPLOAD_UPLOAD_PROGRESS:", true)
  swfupload_debug("  " + file_obj.name + ", " + bytes_complete + "/" + total_bytes, true)
}

/* The uploadError event is fired any time an upload is interrupted or does not
 * complete successfully. The error code parameter indicates the type of error
 * that occurred. The error code parameter specifies a constant in
 * SWFUpload.UPLOAD_ERROR.
 *
 * Stopping, Cancelling or returning 'false' from uploadStart will cause
 * uploadError to fire. Upload error will not fire for files that are cancelled
 * but still waiting in the queue.
 */
function swfupload_upload_error(file_obj, error_code, message) {
  swfupload_debug("SWFUPLOAD_UPLOAD_ERROR:", true)
}

/* uploadSuccess is fired when the entire upload has been transmitted and the
 * server returns a HTTP 200 status code. Any data outputted by the server is
 * available in the server data parameter.
 *
 * Due to some bugs in the Flash Player the server response may not be
 * acknowledged and no uploadSuccess event is fired by Flash. In this case the
 * assume_success_timeout setting is checked to see if enough time has passed
 * to fire uploadSuccess anyway. In this case the received response parameter
 * will be false.
 *
 * The http_success setting allows uploadSuccess to be fired for HTTP status
 * codes other than 200. In this case no server data is available from the
 * Flash Player.
 *
 * At this point the upload is not yet complete. Another upload cannot be
 * started from uploadSuccess.
 */
function swfupload_upload_success(file_obj, server_data, received_response) {
  swfupload_debug("SWFUPLOAD_UPLOAD_SUCCESS:", true)
}

/* uploadComplete is always fired at the end of an upload cycle (after
 * uploadError or uploadSuccess). At this point the upload is complete and
 * another upload can be started.
 *
 * If you want the next upload to start automatically this is a good place to
 * call this.uploadStart(). Use caution when calling uploadStart inside the
 * uploadComplete event if you also have code that cancels all the uploads in a
 * queue.
 *
 */
function swfupload_upload_complete(file_obj) {
  swfupload_debug("SWFUPLOAD_UPLOAD_COMPLETE:", true)
  swfupload_debug("  " + file_obj.name + ", " + file_obj.filestatus, true)
  
  if ( this.getStats().files_queued > 0 ) {
    this.startResizedUpload(this.getFile(0).ID, this.customSettings.thumbnail_width, this.customSettings.thumbnail_height, SWFUpload.RESIZE_ENCODING.JPEG, this.customSettings.thumbnail_quality, false);
  }else {
    swfupload_debug("ALL IMAGES UPLOADED", true)
  }
}

/* The debug event is called by the SWFUpload library and the Flash Control
 * when the debug setting is set to 'true'. If the debug event is not
 * overridden then SWFUpload writes debug messages to the SWFUpload console (a
 * text box dynamically added to the end of the page body).
 */ 
function swfupload_debug(message, on_console) {
  if ( on_console ) 
    console.log(message)
  else
    swfu.debugMessage(message)
}

