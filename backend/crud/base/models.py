from django.db import models
import uuid

class BaseModel(models.Model):
    uid = models.UUIDField(primary_key=True,editable=False,default=uuid.uuid4)
    created_at = models.DateTimeField(auto_now_add= True)
    updated_at = models.DateTimeField(auto_now=True)
    
    #sending this meta abstract as true so it does not treat it as db schema rather a class 
    class Meta:
        abstract = True